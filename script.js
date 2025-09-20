const company = {
    name: "TechNova Solutions",
    headquarters: "Tbilisi",
    departments: {
        development: {
            manager: "Nino Beridze",
            teams: [
                {
                    teamName: "Frontend",
                    members: [
                        { name: "Nika", role: "Developer", salary: 2000, projects: ["Website Redesign", "Landing Page"] },
                        { name: "Ana", role: "Intern", salary: 800, projects: ["Landing Page"] }
                    ]
                },
                {
                    teamName: "Backend",
                    members: [
                        { name: "Luka", role: "Developer", salary: 2200, projects: ["API System", "Database Migration"] },
                        { name: "Mariam", role: "Lead Developer", salary: 3000, projects: ["API System"] }
                    ]
                }
            ]
        },
        marketing: {
            manager: "Giorgi Mchedlidze",
            teams: [
                {
                    teamName: "Digital Marketing",
                    members: [
                        { name: "Dato", role: "SEO Specialist", salary: 1500, projects: ["Google Ads", "SEO Audit"] },
                        { name: "Salome", role: "Content Creator", salary: 1300, projects: ["Blog Posts", "Email Campaign"] }
                    ]
                }
            ]
        }
    }
}

// Print the company name in uppercase
console.log(company.name.toUpperCase());
// Print the headquarters in lowercase
console.log(company.headquarters.toLowerCase())

// Loop through all departments using for...in
for (let dep in company.departments) {
    // Print the department name (uppercase)
    console.log(dep.toUpperCase())
    // Print the manager’s name
    console.log("Manager:", company.departments[dep].manager)

    // Inside each department, loop through all teams using a for loop
    for (let i = 0; i < company.departments[dep].teams.length; i++) {
        // Print the team name in uppercase
        console.log("Team:", company.departments[dep].teams[i].teamName.toUpperCase())

        // For each member in a team
        for (let names = 0; names < company.departments[dep].teams[i].members.length; names++) {
            let wevri = company.departments[dep].teams[i].members[names]
            // Print their name in uppercase and their role in lowercase
            console.log(`Member Name: ${wevri.name.toUpperCase()}, Role: ${wevri.role.toLowerCase()}`)
            // Use a ternary operator to check if salary ≥ 2000 → "High Salary" else "Low Salary"
            console.log("Salary:", wevri.salary >= 2000 ? "High Salary" : "Low Salary")
            // Print all the projects each member is working on (loop through the projects array)
            console.log("Projects:", wevri.projects.join(", "))
        }
    }
}
