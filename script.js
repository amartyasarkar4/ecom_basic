console.log("====================================");
console.log("Connected");
console.log("====================================");

document.addEventListener("DOMContentLoaded", () => {
  let category_Names = [];

  let category_Products = new Array();

  let setselectCateg = "";

  const amarSvgs = {
    Men: `
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 471.023 471.023"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M297.662,349.34c-5.374-7.683-9.313-20.278-1.01-69.361c14.189-14.058,25.928-27.078,28.648-30.128l0.733-0.821 l2.368-12.976c20.311-43.728,83.158-202.962-66.84-225.785C91.88-15.559,93.441,185.748,154.925,246.148l0.525,2.881l0.741,0.821 c2.717,3.05,14.459,16.078,28.659,30.137c7.051,41.761,5.252,57.121,1.116,65.633C121.8,358.629,16.571,390.315,0,463.03h235.511 h235.513C444.069,396.463,358.006,364.295,297.662,349.34z M188.275,272.312c-1.311-1.302-2.607-2.612-3.896-3.923 c-7.867-7.983-15.356-15.97-21.596-22.947l-7.835-42.877c-0.415-2.473-0.767-4.869-1.146-7.288 c0.291-40.93,5.975-91.211,32.118-91.794l59.22,45.14v-14.719l33.117,14.719l-6.023-27.475l14.051,4.905l5.021-15.699 l-12.043-30.42l53.15,55.813c0.337,19.432-1.61,41.701-5.858,66.772l-7.851,42.923c-6.24,6.97-13.722,14.964-21.588,22.947 c-1.287,1.311-2.589,2.621-3.896,3.923c-1.318,1.318-2.649,2.621-3.983,3.928c-19.74,19.34-40.126,36.628-48.49,36.628 c-8.369,0-28.749-17.288-48.491-36.628C190.92,274.934,189.594,273.631,188.275,272.312z M240.748,424.438 c-39.134,0-70.983-18.049-70.983-40.234c0-7.182,3.565-14.314,10.307-20.622l0.894-0.842c1.659-1.459,3.486-2.869,5.458-4.204 l1.176-1.186c2.817-3.551,5.677-7.146,7.574-13.525c2.787-9.354,3.488-24.777-0.946-54.745 c17.418,16.406,36.332,31.654,46.504,31.654c10.171,0,29.086-15.248,46.502-31.654c-4.945,33.365-3.486,48.698,0.164,57.835 c1.868,4.669,4.316,7.742,6.761,10.816l0.874,0.821c2.039,1.378,3.919,2.821,5.574,4.315l0.789,0.737 c6.736,6.3,10.304,13.438,10.304,20.623C311.724,406.39,279.885,424.438,240.748,424.438z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    `,
    Women: `
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 471.023 471.023"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M471.023,469.238c-26.971-66.567-113.018-98.735-173.361-113.691c-4.629-6.632-8.188-16.935-3.764-51.135 c19.381,36.132,65.266,26.072,65.266,26.072c-6.877-4.904-8.841-14.719,4.896-28.456c13.738-13.737,35.326-25.516,25.516-37.289 c-9.814-11.778-45.14-7.851-7.851-49.069c37.289-41.214,45.14,18.645,0-124.296C336.586-51.574,228.642,19.41,228.642,19.41 C81.447-37.505,119.718,85.158,91.259,99.877c-28.457,14.719-13.737,57.896,9.94,83.102c23.678,25.209,2.817,33.672-13.864,49.372 c-16.683,15.706-9.814,47.107,27.475,52.012c37.289,4.909-68.579,12.527,8.833,49.067c7.654,3.61,35.237-1.15,65.85-8.235 c0.563,14.038-1.062,21.563-3.526,26.633C121.8,364.836,16.571,396.523,0,469.238h235.511H471.023z M188.275,278.52 c-1.311-1.302-2.607-2.612-3.896-3.923c-7.867-7.979-15.356-15.97-21.604-22.947l-7.834-42.873 c-10-59.027-7.306-102.58,7.961-129.814c1.266,4.178,5.44,8.958,16.675,12.405c24.533,7.52,72.616-10.143,80.467,21.257 c7.851,31.402,13.737,42.196,26.493,44.16c12.76,1.961,24.533-10.428,24.533,26.188c0,15.647,8.601,13.296,18.446,5.504 c-0.821,6.546-1.787,13.259-2.974,20.246l-7.838,42.919c-6.248,6.969-13.737,14.96-21.604,22.947 c-1.286,1.31-2.589,2.62-3.891,3.927c-1.318,1.318-2.653,2.621-3.987,3.923c-8.877,8.692-17.85,16.943-25.836,23.412 c-9.767,7.935-18.038,13.221-22.639,13.221c-2.477,0-6.007-1.535-10.255-4.156c-10.119-6.256-24.325-18.847-38.236-32.477 C190.928,281.145,189.594,279.842,188.275,278.52z M169.765,390.404c0-7.182,3.565-14.311,10.307-20.614l0.84-0.79 c1.663-1.479,3.519-2.913,5.512-4.268l1.176-1.19c2.817-3.551,5.677-7.137,7.574-13.529c1.737-5.818,2.641-14.086,2.028-26.649 c-0.367-7.605-1.302-16.799-2.974-28.096c8.871,8.355,18.083,16.351,26.383,22.237c8,5.683,15.128,9.417,20.129,9.417 c9.045,0,25.022-12.062,40.691-26.272c1.947-1.771,3.896-3.574,5.811-5.39c-0.196,1.318-0.36,2.561-0.537,3.831 c-4.26,30.688-2.812,45.231,0.706,54.004c1.871,4.669,4.315,7.751,6.765,10.824l0.865,0.806c2.076,1.41,3.972,2.881,5.65,4.384 l0.722,0.665c6.729,6.304,10.295,13.434,10.295,20.618c0,22.186-31.839,40.23-70.976,40.23 C201.6,430.622,169.765,412.592,169.765,390.404z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    `,
    Kids: `
      <svg
        fill="#000000"
        height="200px"
        width="200px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 218.142 218.142"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M109.07,193.731c-11.594,0-21.224-8.566-22.894-19.702c-9.066-2.843-17.594-7.36-25.054-13.365 c-12.386-9.97-21.428-23.664-25.727-38.857c-3.523,1.974-7.46,3.004-11.564,3.004C10.691,124.81,0,114.119,0,100.977 c0-13.141,10.691-23.833,23.832-23.833c4.104,0,8.041,1.03,11.564,3.004c4.299-15.193,13.341-28.887,25.727-38.857 c3.623-2.916,7.496-5.48,11.562-7.674c0.155-0.109,0.326-0.202,0.51-0.275c0.007-0.003,0.013-0.005,0.02-0.008 c10.979-5.812,23.322-8.924,35.856-8.924c17.396,0,34.424,5.995,47.948,16.881c12.385,9.97,21.427,23.664,25.726,38.857 c3.523-1.974,7.461-3.004,11.564-3.004c13.142,0,23.833,10.691,23.833,23.833c0,13.142-10.691,23.833-23.833,23.833 c-4.104,0-8.041-1.03-11.564-3.004c-4.299,15.193-13.341,28.887-25.726,38.857c-7.461,6.005-15.987,10.521-25.054,13.365 C130.295,185.164,120.664,193.731,109.07,193.731z M91.603,175.514c2.154,7.618,9.169,13.216,17.468,13.216 s15.314-5.598,17.469-13.217C115.143,178.193,102.999,178.192,91.603,175.514z M90.924,170.247 c5.81,1.503,11.895,2.297,18.146,2.297s12.338-0.794,18.147-2.297c-0.044-2.366-0.55-4.652-1.443-6.754 c-2.691,1.822-5.894,2.825-9.196,2.825c-1.326,0-2.646-0.161-3.927-0.478c-2.342-0.581-4.818-0.581-7.162,0 c-1.278,0.317-2.6,0.478-3.927,0.478c-3.306,0-6.511-1.005-9.204-2.831C91.47,165.585,90.967,167.873,90.924,170.247z M129.594,159.888c1.421,2.722,2.31,5.738,2.557,8.891c22.952-7.742,40.87-26.818,46.613-51.563 c0.193-0.832,0.798-1.507,1.603-1.792c0.805-0.284,1.699-0.139,2.372,0.387c3.348,2.616,7.349,3.998,11.57,3.998 c10.385,0,18.833-8.448,18.833-18.833c0-10.384-8.448-18.833-18.833-18.833c-4.222,0-8.223,1.382-11.57,3.998 c-0.673,0.525-1.568,0.671-2.372,0.387c-0.805-0.284-1.409-0.96-1.603-1.792c-3.18-13.701-10.093-25.666-19.526-34.929 c-2.714,0.531-18.305,3.097-36.069-3.823c-15.43-6.012-22.713-13.047-25.097-15.744c-3.12,0.476-6.181,1.153-9.161,2.018 c2.264,3.067,7.63,9.103,18.306,15.372c15.348,9.011,30.298,8.24,30.445,8.23c1.376-0.088,2.563,0.969,2.644,2.347 c0.082,1.378-0.969,2.562-2.347,2.644c-0.672,0.038-16.629,0.864-33.273-8.91C91.738,44.342,85.966,36.976,83.95,33.899 c-2.207,0.82-4.364,1.746-6.465,2.772c1.907,3.15,6.753,9.753,17.152,17.055c14.504,10.182,29.532,10.667,29.682,10.67 c1.379,0.034,2.472,1.179,2.439,2.558s-1.207,2.496-2.552,2.441c-0.672-0.015-16.642-0.485-32.442-11.577 C80.479,49.894,75.209,42.66,73.062,39.03c-16.614,9.626-29.073,25.839-33.685,45.708c-0.193,0.832-0.798,1.507-1.603,1.792 c-0.804,0.285-1.699,0.14-2.372-0.387c-3.348-2.615-7.349-3.998-11.57-3.998C13.448,82.145,5,90.593,5,100.977 c0,10.385,8.448,18.833,18.832,18.833c4.222,0,8.223-1.382,11.57-3.998c0.673-0.527,1.568-0.672,2.372-0.387 c0.805,0.284,1.409,0.96,1.603,1.792c5.743,24.744,23.661,43.82,46.613,51.562c0.245-3.167,1.13-6.185,2.547-8.904 c-2.281-2.991-3.468-6.703-3.352-10.487c-20.185-9.344-27.862-27.508-28.187-28.295c-0.526-1.276,0.082-2.738,1.359-3.264 c1.275-0.524,2.735,0.082,3.262,1.355l0,0c0.071,0.171,7.012,16.456,24.545,25.128c2.083-5.668,7.258-9.924,13.435-10.653 c1.935-0.228,3.859-0.119,5.723,0.322c2.489,0.589,5.012,0.588,7.499,0c1.862-0.441,3.786-0.548,5.718-0.322l0,0 c6.502,0.766,11.896,5.441,13.74,11.559c18.143-8.354,24.118-25.685,24.18-25.866c0.437-1.307,1.854-2.016,3.159-1.582 c1.31,0.435,2.02,1.845,1.587,3.154c-0.279,0.846-6.975,20.463-28.248,29.461C132.854,153.826,131.681,157.158,129.594,159.888z M109.071,160.406c1.609,0,3.219,0.194,4.783,0.582c3.189,0.792,6.688,0.104,9.344-1.792c-1.699-2.112-3.872-3.851-6.394-5.04 c-1.499,2.733-4.403,4.59-7.734,4.59s-6.236-1.857-7.735-4.591c-2.528,1.188-4.704,2.923-6.402,5.033 c2.655,1.9,6.167,2.59,9.353,1.8C105.851,160.599,107.461,160.406,109.071,160.406z M117.851,149.155 c3.416,1.4,6.378,3.574,8.71,6.271c1.124-2.028,1.594-4.355,1.338-6.756c-0.556-5.207-4.738-9.432-9.945-10.045l0,0 c-1.349-0.159-2.688-0.085-3.98,0.221c-3.254,0.769-6.552,0.77-9.802,0c-1.296-0.307-2.638-0.382-3.985-0.222 c-5.207,0.615-9.389,4.84-9.942,10.047c-0.255,2.394,0.212,4.714,1.329,6.738c2.331-2.691,5.295-4.856,8.718-6.256 c0.395-4.498,4.182-8.038,8.78-8.038S117.456,144.656,117.851,149.155z M109.07,146.116c-2.104,0-3.814,1.711-3.814,3.814 s1.711,3.814,3.814,3.814s3.814-1.711,3.814-3.814S111.174,146.116,109.07,146.116z M104.501,29.553 c3.454,3.033,9.888,7.646,20.481,11.774c12.253,4.773,23.515,4.649,29.364,4.104c-12.404-10.109-28.215-16.02-45.276-16.02 C107.536,29.411,106.014,29.459,104.501,29.553z M186.674,110.717c-0.342,0-0.688-0.07-1.02-0.218 c-1.261-0.564-1.825-2.043-1.262-3.303l0.998-2.231c0.75-1.676,0.507-3.611-0.634-5.05l-1.04-1.312 c-0.52-0.653-0.678-1.523-0.423-2.317c1.212-3.775,5.896-10.485,14.987-8.864c9.042,1.614,11.298,9.602,11.228,13.599 c-0.024,1.381-1.159,2.507-2.544,2.456c-1.376-0.024-2.473-1.156-2.456-2.531c0.004-0.756-0.163-7.362-7.106-8.602 c-5.302-0.945-7.852,2.41-8.845,4.317l0.116,0.147c2.305,2.906,2.795,6.814,1.281,10.199l-0.998,2.231 C188.541,110.166,187.629,110.717,186.674,110.717z M32.599,110.717c-0.955,0-1.867-0.551-2.283-1.479l-0.998-2.231 c-1.515-3.385-1.023-7.293,1.281-10.199l0.117-0.147c-0.988-1.899-3.53-5.263-8.846-4.316c-6.948,1.241-7.11,7.854-7.105,8.604 c0.008,1.375-1.096,2.506-2.471,2.522c-1.402,0.034-2.505-1.074-2.529-2.448c-0.07-3.998,2.185-11.985,11.227-13.6 c9.075-1.625,13.776,5.088,14.987,8.864c0.255,0.794,0.097,1.663-0.422,2.317l-1.04,1.312c-1.142,1.439-1.385,3.374-0.635,5.05 l0.998,2.231c0.563,1.26-0.001,2.739-1.262,3.303C33.287,110.647,32.94,110.717,32.599,110.717z M135.113,106.723 c-7.481,0-13.568-6.086-13.568-13.567c0-7.481,6.087-13.568,13.568-13.568s13.567,6.086,13.567,13.568 C148.681,100.636,142.595,106.723,135.113,106.723z M135.113,84.588c-4.725,0-8.568,3.844-8.568,8.568s3.844,8.567,8.568,8.567 c4.724,0,8.567-3.843,8.567-8.567S139.837,84.588,135.113,84.588z M83.028,106.723c-7.481,0-13.567-6.086-13.567-13.567 c0-7.481,6.086-13.568,13.567-13.568s13.567,6.086,13.567,13.568C96.596,100.636,90.51,106.723,83.028,106.723z M83.028,84.588 c-4.724,0-8.567,3.844-8.567,8.568s3.844,8.567,8.567,8.567s8.567-3.843,8.567-8.567S87.752,84.588,83.028,84.588z M135.489,95.656 h-0.753c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h0.753c1.381,0,2.5,1.119,2.5,2.5S136.87,95.656,135.489,95.656z M83.404,95.656h-0.752c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h0.752c1.381,0,2.5,1.119,2.5,2.5S84.785,95.656,83.404,95.656 z"></path>{" "}
        </g>
      </svg>
    `,
  };

  // ====***===TYPESCRIPT IniTialization=====***=====

  // let category_names:String[]=[];
  // let category_Products:any[]=new Array();

  // fetch(
  //   "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json",
  //   {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log("ggghg", response);
  //     response.categories.map((each, indx) => {
  //       category_Names.push(each.category_name);
  //     });
  //   });
  // //   .then((response) => console.log(JSON.stringify(response)));

  const ul = document.getElementById("category_show");
  const list = document.createDocumentFragment();

  const dataUrl =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json";

  const fetch_categ_Data = async () => {
    const response = await fetch(dataUrl);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  };

  fetch_categ_Data().catch((error) => {
    error.message; // 'An error has occurred: 404'
  });

  fetch_categ_Data().then((data) => {
    category_Products = data.categories;

    handleButtonClick(data.categories[0].category_name);
    setselectCateg = data.categories[0].category_name;

    // switchCateg(category_Products);
  });

  const switchCateg = (allCategs) => {
    allCategs.map((each, indx) => {
      category_Names.push(each.category_name);
      let li = document.createElement("li");
      let name = document.createElement("h2");

      setselectCateg == each.category_name
        ? li.classList.add("selectedCategStyle")
        : null;

      name.innerHTML = `<div class="categWithsvg">${
        amarSvgs[each.category_name]
      } ${each.category_name}</div>`;

      li.addEventListener("click", () => handleButtonClick(each.category_name));

      li.appendChild(name);
      list.appendChild(li);
    });
    ul.appendChild(list);
  };

  const handleButtonClick = async (show_categ_items) => {
    setselectCateg = show_categ_items;
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    switchCateg(category_Products);

    const actual_products = category_Products.filter(
      (eachCateg) => eachCateg.category_name == show_categ_items
    );

    const dataContainer = document.getElementById("dataContainer");
    dataContainer.classList.add("styleDataContainer");

    while (dataContainer.firstChild) {
      dataContainer.removeChild(dataContainer.firstChild);
    }

    if (category_Names) {
      // Update the HTML content with the fetched data
      //   dataContainer.textContent = show_categ_items;
      actual_products[0].category_products.map((eachProduct, index) => {
        const productCard = itemsStyle(eachProduct);

        // Append product card to products container
        dataContainer.appendChild(productCard);
      });
    } else {
      // Handle error or display a message if data fetch fails
      //   dataContainer.textContent = "Failed to fetch data.";
    }
  };

  const itemsStyle = (eachProduct) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // Create and set product image
    const imageElement = document.createElement("img");
    imageElement.classList.add("product-image");
    imageElement.src = eachProduct.image;
    imageElement.alt = eachProduct.title;
    productCard.appendChild(imageElement);

    // Create and set product title
    const AboutDiv = document.createElement("div");
    AboutDiv.classList.add("styleAboutDiv");
    const titleElement = document.createElement("p");
    titleElement.classList.add("mainTitle");
    titleElement.textContent =
      eachProduct.title.length > 13
        ? `${eachProduct.title.slice(0, 13)}..`
        : eachProduct.title;
    const vendorEl = document.createElement("div");
    vendorEl.classList.add("stylevendor");
    const vendortext = document.createElement("p");
    vendortext.textContent = eachProduct.vendor;
    vendorEl.appendChild(vendortext);
    AboutDiv.appendChild(titleElement);
    AboutDiv.appendChild(vendorEl);

    productCard.appendChild(AboutDiv);

    // Create and set product price
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("stylePriceDiv");

    const priceElement = document.createElement("p");
    priceElement.textContent = `Rs.${eachProduct.price}.00`;

    const compareAtpriceElement = document.createElement("p");
    compareAtpriceElement.classList.add("compareAtpriceElement");
    compareAtpriceElement.textContent = `${eachProduct.compare_at_price}.00`;

    const OffPercent = document.createElement("p");
    OffPercent.classList.add("OffPercent");
    OffPercent.textContent = `${getoffpercentage(
      eachProduct.price,
      eachProduct.compare_at_price
    )}% Off`;

    priceDiv.appendChild(priceElement);
    priceDiv.appendChild(compareAtpriceElement);
    priceDiv.appendChild(OffPercent);

    productCard.appendChild(priceDiv);

    // Create and set Add to cart Button
    const cartButton = document.createElement("div");
    cartButton.classList.add("cartButtonDiv");

    const mbutton = document.createElement("button");
    mbutton.classList.add("mbutton");
    mbutton.textContent = `Add To Cart`;

    cartButton.appendChild(mbutton);

    productCard.appendChild(cartButton);

    // if Badge Text present
    if (eachProduct.badge_text) {
      const badgeDiv = document.createElement("div");
      badgeDiv.classList.add("badgeDiv");

      const badgeEl = document.createElement("p");
      badgeEl.classList.add("badgeEl");
      badgeEl.textContent = `${eachProduct.badge_text}`;

      badgeDiv.appendChild(badgeEl);

      productCard.appendChild(badgeDiv);
    }
    return productCard;
  };

  const getoffpercentage = (price, comparePrice) => {
    const offAmount = comparePrice - price;
    const offPercentage = (offAmount / comparePrice) * 100;
    return offPercentage.toFixed(2);
  };
});
