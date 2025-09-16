function findAndReplace() {
    // Get user input for height and width
    const userHeight = document.getElementById("height").value || 150;
    const userWidth = document.getElementById("width").value || 268;

    // Define multiple words to be replaced and their replacements
    const replacements = [
      { find: ' alt="image"', replace: "" },
      { find: "</figure>", replace: "" },
      { find: "gifv", replace: "gif" },
      { find: 'alt=""', replace: "" },
      { find: "/> <", replace: "/><" },
      { find: `<figure data-orig-height="${userHeight}" data-orig-width="${userWidth}">`,replace: ''},
      { find: `data-orig-height="${userHeight}" data-orig-width="${userWidth}"`, replace: '' },
      { find: `sizes="(max-width: ${userWidth}px) 100vw, ${userWidth}px"`, replace: '' }, 
    ];

    // Get the text area
    const textArea = document.getElementById("textArea");
    let originalText = textArea.value;

    // Perform replacements
    replacements.forEach(({ find, replace }) => {
      originalText = originalText.split(find).join(replace);
    });

    // Remove 'srcset' attribute using regex
    originalText = originalText.replace(/\s*srcset="[^"]*"\s*/g, '');

    // Update the text area with the modified content
    textArea.value = originalText;    
}




function removeLineBreaks() {
    // Get the text area
    const textArea = document.getElementById("textArea");

    // Remove line breaks by replacing all \n and \r\n with empty string
    textArea.value = textArea.value.replace(/(\r\n|\n|\r)/g, '');  // Removes all line breaks
}
