import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`:root {

  
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    /* padding: 0;
    margin: 0; */
  
    /* Creating animations for dark mode */
    /* transition: background-color 0.3s, border 0.3s; */
  }


  :focus-visible {
    outline: unset
  }


--fc-border-color: var(--color-grey-700);
.fc-toolbar-title {
  color: var(--color-grey-300);
  font-size: 2rem;
}

.fc-button {
  width: 75px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  padding: 5px 10px; /* Adjust padding for text/icon spacing */
  font-size: 1rem; /* Adjust font size of the button text */
}

.fc-today-button {
  width: 75px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  padding: 5px 10px; /* Adjust padding for text/icon spacing */
  font-size: 1.2rem; /* Adjust font size of the button text */
  color:var(--color-grey-100)
}

  html {
    font-size: 62.5%;
    
  }
  
  body {
    font-family:  "Poppins", "Segoe UI Symbol", "Noto Color Emoji", "sans-serif";
    background-color: var(--color-gray-900);
    /* transition: color 0.3s, background-color 0.3s; */
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1rem;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }

  
  
  input,
  textarea,
  select {
    border:1px solid var(--color-gray-700);
    background-color:var(--color-grey-900);
    width:100%;
  }

  select:disabled,
  textarea:disabled,
  input:disabled {
    background-color: var(--color-grey-800);
    color: var(--color-grey-100);
  }

  select {
  -webkit-appearance: none; /* For WebKit browsers (Chrome, Safari) */
  -moz-appearance: none; /* For Firefox */
  appearance: none; /* Standard property */
}
    select {
      /* ... (hide default arrow) ... */
      background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position-x: calc(100% - 10px); /* Adjust position as needed */
      background-position-y: center;
      padding-right: 30px; /* Add padding to prevent text overlapping the arrow */      
    }
  
  /* input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  } */

    .form-element {

    }


    .form-element:focus:not(.error) {
      outline: 2px solid var(--color-brand-600);
      outline-offset: -1px;
    }

    .form-element.error {
      border:2px solid var(--color-red-600)
    }

  
  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }

  a:has(svg) svg  {
    opacity: .7;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  
    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
  

  .menu-item {
    background-color: var(--color-grey-1000);
    border-radius: var(--border-radius-sm);
  }

 .menu-item:hover {
    background-color: var(--color-grey-900);
    transition: background-color 0.5s ease-out .05s ;
  }
  .menu-item-active {
    background-color: var(--color-grey-900);
  } 

 /* div.menu-item:has(a.menu-item-active) {
  background-color: var(--color-grey-900);
 } */
  
    /* &.light-mode { */
      --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
    --color-grey-1000: #18212f;
  
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;
  
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
  
    --backdrop-color: rgba(255, 255, 255, 0.1);
  
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0%;
    --image-opacity: 100%;
/* 
    }

    &.dark-mode {
      
      --color-brand-600: #6366f1;
    --color-brand-500: #4f46e5;
  
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
    } */

      /* Indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    

    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  

  }

  /*
  FOR DARK MODE
  
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
  */

  .react-datepicker {
  border: 1px solid var(--color-grey-800);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--color-grey-900);
  color:var(--color-grey-100) !important
  }
/* .react-datepicker::after {
  background-color: var(--color-grey-900);
} */

.react-datepicker__triangle {
  fill: var(--color-grey-900) !important;
  background-color: transparent !important; 
  color:var(--color-grey-900) !important; 
}

.react-datepicker__header {
  background-color: var(--color-grey-900);
}

.react-datepicker__day {
 color:var(--color-grey-100);
}

.react-datepicker__day:hover {
  background-color:var(--color-grey-700)  !important
}

.react-datepicker__day-name {
 color:var(--color-grey-100);
}

.react-datepicker__current-month {
  color:var(--color-grey-100) 
}

.react-datepicker__day--selected {
  background-color: #007bff;
  color: white;
}


/* FulLCalendar */
// remove extra border around calendar events
.fc-toolbar-title {
  color:#fff !important
}
.fc-h-event {
  border:0;
  background-color: transparent
}
.fc-button,.fc-button:focus {
    background-color: var(--color-brand-600) !important;
    border:1px solid var(--color-brand-500) !important;
}

.fc-day-today  {
  background-color: var(--color-gray-800) !important;
  border: 2px solid var(--color-gray-600) !important
}

.fc-day-today > div  {
  background-color: var(--color-gray-800) !important;
  border-top: 2px solid var(--color-gray-600) !important
}

.calendar-wrap-desc {
   overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Specifies the maximum number of lines */
  -webkit-box-orient: vertical;
  white-space: normal;
}

.two-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Specifies the maximum number of lines */
  -webkit-box-orient: vertical;
}


.page-link-active {
  color: var(--color-brand-100);
  background-color: var(--color-brand-600);
  border-radius: 5px;
  border:1px solid var(--color-gray-600)
}
.page-link {
  border:1px solid transparent

}

.page-link:hover {
   color: var(--color-brand-100);
  background-color: var(--color-brand-600);
  border-radius: 5px;
  border:1px solid var(--color-gray-600)
}


.highlighted-text {
  background-color: yellow; 
  color: var(--color-yellow-600); 
}

`;
