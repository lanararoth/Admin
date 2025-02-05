import Alhaimi from '../Images/Alhaimi Fatima Sameer.jpg'
import Ayshu from '../Images/Ayshu.jpg'
import Eshaal from '../Images/Eshaal Hafile.jpg'
import Eva from '../Images/Eva Zaitoon.jpg'
import Faris from '../Images/Faris Abdul Kayyoom P T.jpg'
import Fathima from '../Images/Fathima.jpg'
import Hamiz from '../Images/Hamiz Hassan R T.jpg'
import Hiba from '../Images/Hiba.jpg'
import Iman from '../Images/Iman.jpg'
import Isha from '../Images/Isha Maryam.jpg'
import Jaza from '../Images/Jaza Fathima.jpg'
import Haiqa from '../Images/Kadeeja Haiqa P V.jpg'
import Raima from '../Images/Kadeeja Raima Puthanchery.jpg'
import Tamim from '../Images/Mohammed Tamim.jpg'
import Zevin from '../Images/Mohammed Zevin.jpg'
import Swalih from '../Images/Muhammed Swalih.jpg'
import Madheeha from '../Images/pp.jpg'
import Zayd from '../Images/Zayd Anwar.jpg'



const missingCases = [
    {
      id: 1,
      name: "Ayshu",
      age: 10,
      gender: "Female",
      lastSeen: "Near City Park, January 12, 2025",
      specialFeatures: "Scar on left cheek",
      contact: "123-456-7890",
      imageSrc: Ayshu,
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
      id: 2,
      name: "Eshaal Hafile",
      age: 12,
      gender: "Female",
      lastSeen: "Shopping Mall, January 10, 2025",
      specialFeatures: "Wears glasses",
      contact: "987-654-3210",
      imageSrc: Eshaal,
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
      id: 3,
      name: "Muhammed Swalih",
      age: 9,
      gender: "Male",
      lastSeen: "School Grounds, January 8, 2025",
      specialFeatures: "Birthmark on right arm",
      contact: "555-123-4567",
      imageSrc: Swalih,
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
      id: 4,
      name: "Eva Zaitoon",
      age: 8,
      gender: "Female",
      specialFeatures: "Missing front tooth",
      lastSeen: "Community Center, January 7, 2025",
      contact: "444-567-8910",
      imageSrc: Eva,
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
      id: 5,
      name: "Fathima",
      age: 11,
      gender: "Female",
      specialFeatures: "Freckles on nose",
      lastSeen: "Downtown Area, January 5, 2025",
      contact: "333-222-1111",
      imageSrc: Fathima,        
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
      id: 6,
      name: "Isha Maryam",
      age: 13,
      gender: "Female",
      specialFeatures: "Braces on teeth",
      lastSeen: "Library, January 3, 2025",
      contact: "888-777-6666",
      imageSrc: Isha,
      parentDetails: {
        parentName: "Rahim Maryam",
        contact: "123-321-4567",
        email: "rahim.maryam@example.com",
        address: "303 Library Lane, Villagetown"
      }
    },
    {
        id: 7,
        name: "Hamiz Hassan R T",
        age: 13,
        gender: "Male",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Hamiz,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 8,
        name: "Faris Abdul Kayyoom P T",
        age: 13,
        gender: "Male",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Faris,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 9,
        name: "Muhammed Tamim",
        age: 13,
        gender: "Male",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Tamim,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 10,
        name: "Jaza Fathima",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Jaza,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 11,
        name: "Kadeeja Raima Puthanchery",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Raima,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 12,
        name: "Iman",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Iman,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 13,
        name: "Kadeeja Haiqa P V",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Haiqa,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 14,
        name: "Muhammed Zevin",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Zevin,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    }, 
    {
        id: 15,
        name: "Zayd Anwar",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Zayd,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 16,
        name: "Madheeha",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Madheeha,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },
    {
        id: 17,
        name: "Hiba",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Hiba,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    }, 
    {
        id: 18,
        name: "Alhaimi Fatima Sameer",
        age: 13,
        gender: "Female",
        specialFeatures: "Braces on teeth",
        lastSeen: "Library, January 3, 2025",
        contact: "888-777-6666",
        imageSrc: Alhaimi,
        parentDetails: {
          parentName: "Rahim Maryam",
          contact: "123-321-4567",
          email: "rahim.maryam@example.com",
          address: "303 Library Lane, Villagetown"
        }
    },  


  ];

  
  
  export default missingCases;
  