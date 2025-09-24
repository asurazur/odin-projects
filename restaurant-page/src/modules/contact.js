export function loadContact() {
    const contentDiv = document.querySelector('#content');

    const contactSection = document.createElement("div");
    contactSection.id = "contact-section";

    // Heading
    const heading = document.createElement("div");
    heading.id = "contact-heading";

    const h1 = document.createElement("h1");
    h1.textContent = "Get in Touch";

    const p1 = document.createElement("p");
    p1.className = "p2";
    p1.textContent = "Got questions about our menu, reservations, or special requests? Whether you’re planning a family dinner, a casual night out, or simply craving authentic Japanese flavors, our team is here to help.";

    heading.append(h1, p1);

    // Content
    const content = document.createElement("div");
    content.id = "contact-content";

    // Form container
    const formContainer = document.createElement("div");
    formContainer.id = "contact-form-container";

    const h2 = document.createElement("h2");
    h2.textContent = "How can we help you?";

    const form = document.createElement("form");
    form.id = "contact-form";
    form.action = "/submit-form";
    form.method = "POST";

    // Helper to create form groups
    function createFormGroup(labelText, inputType, id, name, placeholder, required = false) {
        const group = document.createElement("div");
        group.className = "form-group";

        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = labelText;

        let input;
        if (inputType === "textarea") {
            input = document.createElement("textarea");
            input.rows = 5;
        } else {
            input = document.createElement("input");
            input.type = inputType;
        }

        input.id = id;
        input.name = name;
        input.placeholder = placeholder;
        if (required) input.required = true;

        group.append(label, input);
        return group;
    }

    form.append(
        createFormGroup("Full Name", "text", "name", "name", "Your Name", true),
        createFormGroup("Email Address", "email", "email", "email", "you@example.com", true),
        createFormGroup("Phone Number (optional)", "tel", "phone", "phone", "+63 912 345 6789"),
        createFormGroup("Your Message", "textarea", "message", "message", "Type your message here...", true)
    );

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "contact-submit";
    submitBtn.textContent = "Send Message";

    form.appendChild(submitBtn);
    formContainer.append(h2, form);

    // Contact details
    const details = document.createElement("div");
    details.id = "contact-details";

    const h3 = document.createElement("h3");
    h3.textContent = "Contact Details";

    const detailsContent = [
        { strong: "Phone:", text: " +63 917 505 1031" },
        { strong: "Email:", text: " ramenrakuzenph@gmail.com" },
        { strong: "Address:", text: " Dona Maria Building, Daraga, Albay" },
        { strong: "Opening Hours:", text: " Mon–Sun: 5:00 PM – 9:00 PM" }
    ];

    details.appendChild(h3);
    detailsContent.forEach(item => {
        const p = document.createElement("p");
        p.className = "p2";

        const strong = document.createElement("strong");
        strong.className = "p2";
        strong.textContent = item.strong;

        p.append(strong, document.createTextNode(item.text));
        details.appendChild(p);
    });

    // Assemble
    content.append(formContainer, details);
    contactSection.append(heading, content);

    contentDiv.appendChild(contactSection);
}