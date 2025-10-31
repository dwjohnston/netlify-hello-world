import { foo } from "sample-git-package";


document.getElementById("my-button")?.addEventListener("click", () => {
    alert(foo("Hello, World!", "second value", "third value"));
});