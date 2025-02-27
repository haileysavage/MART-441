// Create the ViewMaster class
class ViewMasterImage {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

// Create an array of ViewMasterImage objects
const images = [
    new ViewMasterImage(
        "2017 Women's March",
        "womens_march.jpg",
        "A worldwide protest on January 21st, 2017, the day after the first inauguration of Donald Trump. It was prompted by Trump's policy positions and rhetoric, which were and are seen as misogynistic and representative as a threat to the rights of women.",
        "trishp2115",
        "2017"
    ),
    new ViewMasterImage(
        "Black Lives Matter Protest",
        "blm_protest.jpg",
        "A large crowd protesting for racial justice in Amsterdam.",
        "Shane Aldendorff",
        "2020"
    ),
    new ViewMasterImage(
        "School Strike 4 Climate: Australia",
        "school_strike.jpg",
        "School Strike 4 Climate was formed in 2018 and is part of a global movement of student strikers committed to ending fossil fuel extraction and securing a safe and liveable future. ",
        "Julian Meehan",
        "2018"
    ),
    new ViewMasterImage(
        "#MeToo",
        "metoo.jpg",
        "MeToo is a social movement that aims to end sexual abuse, harassment, and rape culture. It's a survivor-led movement that encourages people to speak out against sexual violence and to support each other. ",
        "Meredith Nutting",
        "2018"
    ),
    new ViewMasterImage(
        "Rosa Parks' Arrest",
        "rosa_parks.jpg",
        "Civil rights pioneer Rosa Parks was photographed by Alabama cops following her February 1956 arrest during the Montgomery bus boycotts",
        "Richard",
        "2004"
    )
];

// Function to display a random image
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    document.getElementById("image").src = `images/${selectedImage.image}`;
    document.getElementById("title").textContent = selectedImage.title;
    document.getElementById("description").textContent = selectedImage.description;
    document.getElementById("author").textContent = selectedImage.author;
    document.getElementById("year").textContent = selectedImage.year;
}

// Initialize with a random image on load
window.onload = showRandomImage;
