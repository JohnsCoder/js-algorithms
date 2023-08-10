const fs = require("fs");
const os = require("os");

const roleFilePath = `C:/Users/${
  os.userInfo().username
}/desktop/test-case/roles.json`;

const jsonTemplate = '{"person":[],"function":[]}';

const errors = {
  fs: {
    code: -4058,
    message: "no such file or directory",
  },
};

function updateRole(role, value) {
  if (!fs.existsSync(roleFilePath)) {
    try {
      fs.writeFileSync(roleFilePath, "");
    } catch (err) {
      if (err.errno === errors.fs.code) {
        fs.mkdirSync(
          `C:\\Users\\${os.userInfo().username}\\desktop\\test-case\\`
        );
        fs.writeFileSync(roleFilePath, jsonTemplate);
      }
    }
  }
    const rolesFile = fs.readFileSync(roleFilePath, "utf-8");
    const jsonFile = JSON.parse(rolesFile);
    jsonFile[role].push(value);
    fs.writeFileSync(roleFilePath, JSON.stringify(jsonFile));
}

// function getRole() {
//   const rolesFile = fs.readFileSync(roleFilePath, "utf-8");
//   return JSON.parse(rolesFile);
// }

updateRole("role1", "data1");
