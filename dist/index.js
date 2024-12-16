'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var Button_1;
var hasRequiredButton;
function requireButton() {
  if (hasRequiredButton) return Button_1;
  hasRequiredButton = 1;
  // src/base-components/Button.js
  const Button = () => {
    return '<button>Click Me</button>';
  };
  Button_1 = Button; // ใช้ module.exports สำหรับ CommonJS
  return Button_1;
}

var Input_1;
var hasRequiredInput;
function requireInput() {
  if (hasRequiredInput) return Input_1;
  hasRequiredInput = 1;
  // src/base-components/Button.js
  const Input = () => {
    return '<button>Click Me</button>';
  };
  Input_1 = Input; // ใช้ module.exports สำหรับ CommonJS
  return Input_1;
}

var baseComponents;
var hasRequiredBaseComponents;
function requireBaseComponents() {
  if (hasRequiredBaseComponents) return baseComponents;
  hasRequiredBaseComponents = 1;
  // src/base-components/index.js
  const Button = requireButton();
  const Input = requireInput();
  baseComponents = {
    Button,
    Input
  }; // Export เป็น Object
  return baseComponents;
}

var CustomModal_1;
var hasRequiredCustomModal;
function requireCustomModal() {
  if (hasRequiredCustomModal) return CustomModal_1;
  hasRequiredCustomModal = 1;
  // src/base-components/Button.js
  const CustomModal = () => {
    return '<button>Click Me</button>';
  };
  CustomModal_1 = CustomModal; // ใช้ module.exports สำหรับ CommonJS
  return CustomModal_1;
}

var SpecialForm_1;
var hasRequiredSpecialForm;
function requireSpecialForm() {
  if (hasRequiredSpecialForm) return SpecialForm_1;
  hasRequiredSpecialForm = 1;
  // src/base-components/Button.js
  const SpecialForm = () => {
    return '<button>Click Me</button>';
  };
  SpecialForm_1 = SpecialForm; // ใช้ module.exports สำหรับ CommonJS
  return SpecialForm_1;
}

var modules;
var hasRequiredModules;
function requireModules() {
  if (hasRequiredModules) return modules;
  hasRequiredModules = 1;
  // src/modules/index.js
  const CustomModal = requireCustomModal();
  const SpecialForm = requireSpecialForm(); // ตัวอย่างโมดูลอื่น

  modules = {
    CustomModal,
    SpecialForm
  };
  return modules;
}

var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const baseComponents = requireBaseComponents();
  const modules = requireModules();
  src = {
    ...baseComponents,
    ...modules
  }; // รวมทุกอย่าง
  return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
