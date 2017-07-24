(function () {
        "use strict";

        /* 
        Access empty div with the 
        class "mh-image" (look at the HTML structure 
        above), and pass the reference
        to variable masthead */


        var masthead = document.querySelector(".mh-image");

        /* 
        Assign 4 elements to array slides
        (slide-show content) */


        var slides = [
        '<figure>' +
            '<img src="./img/slide-1.jpg" alt="Wind power">' +
            '<figcaption>Wind power energy</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/slide-2.jpg" alt="Wind power">' +
            '<figcaption>Airflows can be used to run wind turbines</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/slide-3.jpg" alt="Solar energy">' +
            '<figcaption>Solar energy</figcaption>' +
        '</figure>',

        '<figure>' +
            '<img src="./img/slide-4.jpg" alt="Solar energy">' +
            '<figcaption>Solar power is the conversion of energy.</figcaption>' +
        '</figure>'
    ];


        /* 
Define function fadeOut. This function will 
make currently displayed slide disappear. */

        function fadeOut() {

            /* 
            Use style object with property opacity 
            on masthead and set it to 0. */
            masthead.style.opacity = 0;
            /* 
            End function fadeOut. */
        }

        var i, k;

        /* 
        Use i as index pointer for the array slides.
        Assign i with initial value 0. */
        i = 0;

        /* 
        Define function runSlides. 
        This function will loop through the array slides. */


        function runSlides() {


            /* 
            Set opacity of masthead to 1.
            Make sure masthead is visible 
            (use style object and opacity on masthead). */
            masthead.style.opacity = 1;

            /* 
            Check the value of i.
            If the value of i is greater than 3 
            (3 is index of fourth slide),
            reset the value of i to 0 
            (slide-show starts over). */

            if (i > 3) {
                i = 0;

            }

            /* 
            Use i to pass the next in line slide 
            from array slides to masthead. */

            masthead.innerHTML = slides[i];
            /* 
            Increment i. */
            i++;
            /* 
            Use setTimeOut() to call function fadeout 
            after 5 seconds.(Slide will remain displayed 
            for 5s and then, function fadeOut 
            will make it disappear). */
            window.setTimeout(fadeOut, 5000);

            /* 
            End function runSlides. */
        }

        /*
        Call function runSlides. This will display 
        the first slide as the web page is loaded. */

        runSlides();
        /* 
        Use setInterval() to call function 
        runSlides every 6 seconds.
        (Function runSlides is 
        a slide-show "engine"). */
        window.setInterval(runSlides, 6000);



        /*
        -------------------------------------
        START CODING REVEAL-HIDE MAIN-CONTENT
        -------------------------------------

        /* 
        Collect all buttons in array buttons. 

        Have all contents in array contents. 

        Access div with the class "container"
        and pass the reference to variable container.*/

        var buttons = document.querySelectorAll("main span");

        /*
        Pass the value of the first array-element of array contents
        to container (use innerHTML on container). */
        var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/hydropower.jpg" alt="hydropower">' +
            '<figcaption>The most common type of hydroelectric power plant uses a dam on a river to store water in a reservoir. Water released from the reservoir flows through a turbine, spinning it, which in turn activates a generator to produce electricity. But hydroelectric power doesnt necessarily require a large dam. Some hydroelectric power plants just use a small canal to channel the river water through a turbine.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/windpower.jpg" alt="windpower">' +
            '<figcaption>Modern wind turbines tower above one of their ancestors-an old windmill used for pumping water. We have been harnessing the winds energy for hundreds of years. From old Holland to farms in the United States, windmills have been used for pumping water or grinding grain. Today, the windmills modern equivalent - a wind turbine - can use the winds energy to generate electricity.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/solarenergy.jpg" alt="solarenergy">' +
            '<figcaption>Solar panels converts the suns light in to usable solar energy using N-type and P-type semiconductor material.  When sunlight is absorbed by these materials, the solar energy knocks electrons loose from their atoms, allowing the electrons to flow through the material to produce electricity. This process of converting light (photons) to electricity (voltage) is called the photovoltaic (PV) effect.</figcaption>' +
        '</figure>'
    ];
        var container = document.querySelector(".container");
        container.innerHTML = contents[0];

        /* 
        Define function handleClick 
        (pass event object to function) */
        function handleClick(ev) {
            ev.preventDefault();
            var target = ev.target;

            /* 
            Loop through buttons array and
            use removeAttribute() to remove 
            id with the value active from an HTML element 
            that contains this id (use hasAttribute() in if-statement to check). */
            for (k = 0; k < buttons.length; k++) {
                if (buttons[k].hasAttribute("id")) {
                    buttons[k].removeAttribute("id");
                }
            }
            /* 
            Use innerHTML on ev.target to check which button
            was clicked. Based on this, display corresponding array 
            element inside <div class="container"></div> */
            if (ev.target.innerHTML === "Wind power") {
                container.innerHTML = contents[0];
            } else if (ev.target.innerHTML === "Hydropower") {
                container.innerHTML = contents[1];
            } else {
                container.innerHTML = contents[2];
            }
            
            /*
            Add the class active to clicked list item (use ev.target) */
            
        ev.target.setAttribute("id", "active");
            /* 
            End function handleClick. */
  }
            /* 
            Loop through buttons array and 
            register handleClick to listen for "click" event 
            on any button from array buttons. */
    
    for (k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }

        })();
