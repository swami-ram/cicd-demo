const message = "CI/CD Demo";

if (message !== "CI/CD Demo") {
    console.error("Test failed!");
    process.exit(1);
}

console.log("All tests passed ✅");
