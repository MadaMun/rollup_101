import { Octokit } from "@octokit/rest";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// =============================
// CONFIGURATION
// =============================
const GH_USERNAME = process.env.GH_USERNAME;         // GitHub Username
const GH_REPO = process.env.GH_REPO;                 // Repository Name
const PACKAGE_NAME = process.env.PACKAGE_NAME;       // Package Name
const PACKAGE_TYPE = process.env.PACKAGE_TYPE;       // npm, docker, maven, rubygems
const KEEP_VERSIONS = 10;                             // Number of versions to keep

// Initialize Octokit (GitHub API)
const octokit = new Octokit({
  auth: process.env.GH_TOKEN
});

// =============================
// FETCH PACKAGE VERSIONS
// =============================
async function fetchPackageVersions() {
  const { data } = await octokit.request(`GET /users/${GH_USERNAME}/packages/${PACKAGE_TYPE}/${PACKAGE_NAME}/versions`, {
    headers: {
      accept: "application/vnd.github+json"
    }
  });

  // Sort by creation date (oldest to newest)
  const sortedVersions = data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return sortedVersions;
}

// =============================
// DELETE OLD VERSIONS
// =============================
async function deleteOldVersions() {
  const versions = await fetchPackageVersions();

  if (versions.length <= KEEP_VERSIONS) {
    console.log(`✅ No old versions to delete. Keeping ${versions.length} version(s).`);
    return;
  }

  const versionsToDelete = versions.slice(0, versions.length - KEEP_VERSIONS);

  for (const version of versionsToDelete) {
    await octokit.request(`DELETE /users/${GH_USERNAME}/packages/${PACKAGE_TYPE}/${PACKAGE_NAME}/versions/${version.id}`, {
      headers: {
        accept: "application/vnd.github+json"
      }
    });
    console.log(`❌ Deleted version: ${version.name}`);
  }

  console.log(`✅ Cleanup complete! Remaining versions: ${KEEP_VERSIONS}`);
}

// =============================
// RUN THE SCRIPT
// =============================
deleteOldVersions().catch(err => {
  console.error("❌ Error:", err.message);
});
