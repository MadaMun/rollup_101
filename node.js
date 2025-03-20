import axios from 'axios';

const REGISTRY_URL = 'https://api.digitalocean.com/v2/registry';
const TOKEN = '${DG_TOKEN}';
const REGISTRY_NAME = 'container-earth';
const KEEP_VERSIONS = 3;

async function fetchAllRepositories() {
    const response = await axios.get(`${REGISTRY_URL}/${REGISTRY_NAME}/repositories`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return response.data.repositories.map(repo => repo.name);
}

async function fetchcontainer(repo) {
    const response = await axios.get(`${REGISTRY_URL}/${REGISTRY_NAME}/repositories/${repo}/digests`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return response.data.manifests;
}

async function deletecontainer(repo, container) {
    try {
        await axios.delete(`${REGISTRY_URL}/${REGISTRY_NAME}/repositories/${repo}/digests/${container}`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });
        console.log(`✅ Deleted: ${repo}:${container}`);
    } catch (error) {
        console.error(`❌ Failed to delete ${repo}:${container}`, error.response?.data || error.message);
    }
}

async function cleanOldcontainer(repo) {
    const container = await fetchcontainer(repo);

    container.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    
    const devcontainer = container.filter(c => c.repository.includes('dev')).sort().reverse();
    const prodcontainer = container.filter(c => c.repository.includes('prod')).sort().reverse(); 

    console.log(devcontainer);
    const oldDevcontainer = devcontainer.slice(KEEP_VERSIONS);
    const oldProdcontainer = prodcontainer.slice(KEEP_VERSIONS);

    for (const container of oldDevcontainer) {        
        await deletecontainer(repo, container.digest);
    }

    for (const container of oldProdcontainer) {
        await deletecontainer(repo, container.digest);
    }

    console.log(`ℹ️ Cleaned ${repo}: ${oldDevcontainer.length} dev container, ${oldProdcontainer.length} prod container.`);
}

export async function main() {
    const repos = await fetchAllRepositories();

    console.log("Repositories detected:", repos);
    for (const repo of repos) {
        await cleanOldcontainer(repo);
    }
}

main().catch(console.error);


