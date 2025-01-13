// TODO: 
// Figure out the best way to deploy this website on some serve that can handle several requests

// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};

  // set up initial slide
  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });

  // set up main slide (previously trial)
  slides.main = slide({
    name: "main",
    
    // Initialize slide
    start: function() {
      // Hide error message
      $('.err').hide();
      
      // Hide image preview
      $('#imagePreview').hide();
      
      // Set concept from stimuli
      document.getElementById('concept').value = exp.stimuli.concept;
      
      // Set up image preview button handler
      $("#previewButton").click(function() {
        const url = document.getElementById('imageUrl').value;
        const preview = document.getElementById('preview');
        const previewDiv = document.getElementById('imagePreview');
        
        if (!url.match(/^https?:\/\//i)) {
          alert('Invalid URL format. The URL must start with "http://" or "https://"\n\nPlease follow the instructions above to get the correct image URL.');
          return;
        }
        
        if (url) {
          preview.src = url;
          preview.onload = function() {
            previewDiv.style.display = 'block';
          };
          preview.onerror = function() {
            previewDiv.style.display = 'none';
            alert('Unable to load image. Please check the URL.');
          };
        } else {
          alert('Please enter an image URL first.');
        }
      });
    },

    // Handle button click
    button: function() {
      // Get all required values
      const imageUrl = document.getElementById('imageUrl').value;
      const thoughtProcess = document.getElementById('thoughtProcess').value;
      const question = document.getElementById('question').value;
      const answer = document.getElementById('answer').value;
      const imagePreviewVisible = $('#imagePreview').is(':visible');

      // Detailed validation
      let errors = [];
      
      if (!imageUrl || !imagePreviewVisible) {
        errors.push("Please provide and preview an image before continuing");
      }
      
      if (!thoughtProcess) {
        errors.push("Please describe your thought process");
      }
      
      if (!question) {
        errors.push("Please provide a question");
      }
      
      if (!answer) {
        errors.push("Please provide an answer");
      }

      if (errors.length === 0) {
        // Log responses
        this.log_responses();
        // Move to next slide
        exp.go();
      } else {
        // Show error if any field is empty
        $('.err').html(errors.join('<br>'));
        $('.err').show();
      }
    },

    // Save response
    log_responses: function() {
      exp.data_trials.push({
        "concept": exp.stimuli,
        "image_url": document.getElementById('imageUrl').value,
        "thought_process": document.getElementById('thoughtProcess').value,
        "question": document.getElementById('question').value,
        "answer": document.getElementById('answer').value,
        "time_in_minutes": (Date.now() - exp.startT) / 60000,
        "country": exp.country
      });
    }
  });

  // Subject info slide
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {
      const gender = $("#gender").val();
      const age = $("#age").val();
      
      let errors = [];
      if (!gender) {
        errors.push("Please select your gender");
      }
      if (!age) {
        errors.push("Please select your age range");
      }
      
      if (errors.length > 0) {
        // Show error message with specific errors
        $('.err').html(errors.join('<br>'));
        $('.err').show();
        // Prevent form submission
        return;
      }
      
      exp.subj_data = {
        gender: gender,
        age: age,
        comments: $("#comments").val() || "No comments provided",
      };
      // Prepare and submit data
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

// Add this function at the top level
function loadCountryContent(country) {
  // Default to 'default' if country is 'None' or not provided
  const contentFile = country && country !== 'None' 
    ? `country_content/${country.toLowerCase()}.html`
    : 'country_content/default.html';

  // Load the content
  $.ajax({
    url: contentFile,
    method: 'GET',
    success: function(response) {
      // Replace the content section with country-specific content
      $('#country-specific-content').html(response);
    },
    error: function() {
      console.log(`Failed to load content for ${country}, falling back to default`);
      // Fall back to default content if country-specific file doesn't exist
      $.get('country_content/default.html', function(response) {
        $('#country-specific-content').html(response);
      });
    }
  });
}

/// initialize experiment
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  var stimuli = all_stims;
  
  // Get concept from stimuli
  var country = get_url_param("country", "None");
  var list_index = parseInt(get_url_param("list", 0));
  exp.stimuli = stimuli[list_index];
  exp.country = country;

  // Load country-specific content
  loadCountryContent(country);

  // Define experiment structure - only 3 slides
  exp.structure = [
    "i0",
    "main",
    "subj_info"
  ];

  exp.data_trials = [];
  
  // Make slides
  exp.slides = make_slides(exp);
  
  // Hide all slides
  $('.slide').hide();

  // Start button handler
  $("#start_button").click(function() {
    exp.go();
  });

  // Start experiment
  exp.go();
}

/* Comment out or remove old code:
slides.example1 = slide({...});
slides.example2 = slide({...});
slides.startExp = slide({...});
slides.trial = slide({...});
slides.thanks = slide({...});
*/
