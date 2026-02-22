function findAndReplace() {
    const textArea = document.getElementById("textArea");
    let originalText = textArea.value;

    // Check if the specific term exists before running replacements
    if (originalText.includes('img src')) {
        
        const userHeight = document.getElementById("height").value || 150;
        const userWidth = document.getElementById("width").value || 268;

        const replacements = [
            { find: ' alt="image"', replace: "" },      
            { find: 'alt=""', replace: "" },
            { find: "/> <", replace: "/><" },
            { find: "<p>", replace: "" },
            { find: "</p>", replace: "" },
            { find: '<img src="', replace: '<img class="lazyload" data-src="' },
            { find: '.gif">', replace: '.gif" src="placeholder.jpg" />' }
        ];

        // Perform "Cleanup" replacements
        replacements.forEach(({ find, replace }) => {
            originalText = originalText.split(find).join(replace);
        });

        // Remove 'srcset' attribute using regex
        originalText = originalText.replace(/\s*srcset="[^"]*"\s*/g, '');

        // Update the text area with the cleaned version
        textArea.value = originalText;
        console.log("Cleanup mode: Replacements applied.");

    } else {
        // REVERSAL LOGIC: If 'alt="image"' is NOT found, we assume we are reverting back
        const reverseReplacements = [
            { find: '<img class="lazyload" data-src="' , replace: '<img src="' },
            { find: '.gif" src="placeholder.jpg" />', replace: '.gif">' }
        ];

        // Perform "Reversal" replacements
        reverseReplacements.forEach(({ find, replace }) => {
            originalText = originalText.split(find).join(replace);
        });

        // Update the text area with the reverted version
        textArea.value = originalText;
        console.log("Reversal mode: Restored original tags.");
    }
}
