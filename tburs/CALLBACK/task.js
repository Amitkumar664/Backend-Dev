// Task 1
function taskOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task One completed");
        }, 1000);
    });
}

// Task 2
function taskTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task Two completed");
        }, 1500);
    });
}

// Task 3
function taskThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task Three completed");
        }, 2000);
    });
}
taskOne()
    .then((result1) => {
        console.log(result1);
        return taskTwo();
    })
    .then((result2) => {
        console.log(result2);
        return taskThree();
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    async function runTasks() {
    try {
        const result1 = await taskOne();
        console.log(result1);

        const result2 = await taskTwo();
        console.log(result2);

        const result3 = await taskThree();
        console.log(result3);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
runTasks();
