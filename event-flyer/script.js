const intrusiveThoughts = [
    "You can do this... probably.",
    "Remember to hydrate! (Your tears count).",
    "You're doing great. The bar is just really low.",
    "Did you turn off the oven? Just checking.",
    "Confidence level: a raccon with a slice of pizza.",
    "If it works, it's not stupid. If it doesn't, it's still art.",
    "You are the plot twist your life didn't ask for.",
    "404: Motivation not found.",
    "Smile! You're confusing everyone.",
    "Today's mood: screaming internally, stylishly.",
    "Don't quit now, the chaos is getting good.",
    "Every mistake is just'spicy learning'."
];

function releaseTheChaos(){
    const message = intrusiveThoughts[Math.floor(Math.random()*intrusiveThoughts.length)]
    alert(message);
}

function startChaos(){
    setTimeout(() => {
        releaseTheChaos();
        startChaos();
    }, Math.random()*15000+5000);
}

window.onload = startChaos