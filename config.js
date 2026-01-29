const CONFIG = {
    valentineName: "Zoe",

    pageTitle: "Will You Be My Valentine? 💝💞",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'], 
        bears: ['🧸', '🐻']               
    },

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes", 
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️" 
        },
        second: {
            text: "How much do you love me?",  
            startText: "Thissssss muchhhhhhh!", 
            nextBtn: "Next ❤️"                                       
        },
        third: {
            text: "Will you be my Valentine, baby? 💗🌹",
            yesBtn: "Yes!",                                         
            noBtn: "No"                                          
        }
    },

  
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰" 
    },


    celebration: {
        title: "Yayyyyyy! I'm the luckiest boy in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕" 
    },

    
    colors: {
        backgroundStart: "#ffafbd",    
        backgroundEnd: "#ffc3a0",     
        buttonBackground: "#ff6b6b",   
        buttonHover: "#ff8787",        
        textColor: "#ff4757"        
    },

   
    animations: {
        floatDuration: "15s",  
        floatDistance: "50px",     
        bounceSpeed: "0.5s",       
        heartExplosionSize: 1.5     
    },

    music: {
        enabled: true,                     
        autoplay: true,                  
        musicUrl: "https://res.cloudinary.com/defnk8oak/video/upload/v1769686079/The_1975_-_About_You_Official_-_The1975VEVO_youtube_ux6cqs.mp3", 
        startText: "🎵 Play Music",      
        stopText: "🔇 Stop Music",         
        volume: 0.5                      
    }
};
window.VALENTINE_CONFIG = CONFIG; 
