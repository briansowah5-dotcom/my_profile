const profile = { 
      name: 'Sowah',
        title: 'Software Engineer',
        tagline: 'Building the future, one line of code at a time.',
        photo: '/profile.jpg',
        about: 'I am a passionate software engineer with a love for creating innovative solutions. With experience in full-stack development, I enjoy tackling complex problems and turning ideas into reality. When I am not coding, I love exploring new technologies and contributing to open-source projects.',
        location: 'Accra Spintex, Ghana',
        email: 'briansowah5@gmail.com',
        phone: '+233 50 648 9888',
        skills: [
             {name: 'React', level: 90},
             {name: 'JavaScript', level: 85},
             {name: 'Git', level: 75},
             {name: 'CSS', level: 85},
             {name: 'Firebase', level: 70},
             {name: 'Typescript', level: 80},
             {name: 'Tailwind CSS', level: 85}
        ],
        projects: [
            { title: 'ip-tracker',
               description: 'A web application that allows users to track the location of an IP address in real-time. Built with React, Leaflet.js, and the IP Geolocation API.',
               tech: ['React', 'CSS', 'Firebase'],
               link: 'https://ip-tracker-hwxl.vercel.app/',
             },
            { title: 'share-stuff',
               description: 'A web application that allows users to share files and folders with others. Built with React, Firebase, and Tailwind CSS.',
                tech: ['React', 'Firebase', 'Tailwind CSS'],
                link: 'https://sharestuff-blue.vercel.app/',
             },
            { title: 'valantines-day',
                description: 'A web application that allows users to send virtual valentines to their loved ones. Built with React, Firebase, and Tailwind CSS.',
                tech: ['React', 'Firebase', 'Tailwind CSS'],
                link: 'https://val-phi-olive.vercel.app/',
             }
        ],
        socials: [
          { label: 'Github', url: 'https://github.com/briansowah5-dotcom' },
        ],
};

export default profile;