$(document).ready(function () {
    // Function to show the corresponding section and hide the others
    function showSection(sectionId) {
        // Hide all sections
        $(".section").hide();

        // Show the selected section
        $("#" + sectionId).show();

        // Hide all code blocks
        $(".code-block").hide();
    }

    // Function to handle click on "Toggle Code" button
    $(".toggle-code-button").on("click", function () {
        // Get the id of the section associated with the button
        var sectionId = $(this).data("section-id");

        // Find the corresponding code block and toggle its visibility
        $("#" + sectionId + "-code").toggle();
    });

    // Assign events to menu links to show the corresponding sections
    $(".menu a").on("click", function (event) {
        event.preventDefault(); // Prevent the default action of the link
        var sectionId = $(this).attr("href").substring(1);
        showSection(sectionId);
    });

    // Show the initial section when the page loads
    var initialSectionId = window.location.hash.substring(1);
    if (initialSectionId) {
        showSection(initialSectionId);
    }
});
