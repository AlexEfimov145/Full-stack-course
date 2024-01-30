const generate = (length = 10) => {
 const characters = "abcdfgigskfireoifugeroivhvfvwaazsxyzxyzxyzxyzxyzxy";
 let password = "";
 for (let i = 0; i < characters.length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
 }
 return password;
}

module.exports = {
    generate,
};


