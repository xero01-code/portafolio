let anim= document.querySelector('.anim');
      var animation = bodymovin.loadAnimation({
  container: anim, // Required
  path: 'https://assets6.lottiefiles.com/packages/lf20_01jwptn4.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
});


(function App() {
  let isDark = false;
  if (localStorage.getItem("dark-mode")) {
      isDark = true;
      setDarkTheme();
  }
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
      if (isDark) {
          setLightTheme();
          isDark = false;
          ManageLocalStorage("DELETE");
          return;
      }
      setDarkTheme();
      ManageLocalStorage("ADD");
      isDark = true;
  });
                          
  function setLightTheme() {
      document.body.classList.remove("dark");
  }
  function setDarkTheme() {
      document.body.classList.add("dark");
  }
                          
  function ManageLocalStorage(command) {
      if (command === "DELETE") {
          localStorage.removeItem("dark-mode");
          return;
      }
      localStorage.setItem("dark-mode", true);
  }
})();