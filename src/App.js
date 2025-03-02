// App.js

import React, { useReducer } from "react";
import EmployeeList from "../src/components/EmployeeList"
import TeamList from "../src/components/TeamList";
import "./App.css";

const initialState = {
  allEmployees: [
    {
      id: 1,
      first_name: "Jaymee",
      last_name: "Imm",
      email: "jimm0@craigslist.org",
      gender: "Genderqueer",
      age: 80
    },
    {
      id: 2,
      first_name: "Jody",
      last_name: "Themann",
      email: "jthemann1@skyrock.com",
      gender: "Agender",
      age: 29
    },
    {
      id: 3,
      first_name: "Cece",
      last_name: "Carlet",
      email: "ccarlet2@jalbum.net",
      gender: "Male",
      age: 69
    },
    {
      id: 4,
      first_name: "Elton",
      last_name: "Allinson",
      email: "eallinson3@jugem.jp",
      gender: "Male",
      age: 31
    },
    {
      id: 5,
      first_name: "Garvy",
      last_name: "Shaddick",
      email: "gshaddick4@rediff.com",
      gender: "Male",
      age: 32
    },
    {
      id: 6,
      first_name: "Fin",
      last_name: "Realy",
      email: "frealy5@unc.edu",
      gender: "Male",
      age: 26
    },
    {
      id: 7,
      first_name: "Minnaminnie",
      last_name: "Fransseni",
      email: "mfransseni6@aboutads.info",
      gender: "Agender",
      age: 52
    },
    {
      id: 8,
      first_name: "Fernando",
      last_name: "Pagon",
      email: "fpagon7@blogs.com",
      gender: "Male",
      age: 40
    },
    {
      id: 9,
      first_name: "Tiphanie",
      last_name: "Fenny",
      email: "tfenny8@sakura.ne.jp",
      gender: "Female",
      age: 52
    },
    {
      id: 10,
      first_name: "Nerti",
      last_name: "Try",
      email: "ntry9@shareasale.com",
      gender: "Female",
      age: 43
    },
    {
      id: 11,
      first_name: "Abagael",
      last_name: "Beadell",
      email: "abeadella@unc.edu",
      gender: "Female",
      age: 76
    },
    {
      id: 12,
      first_name: "Morten",
      last_name: "McNamee",
      email: "mmcnameeb@sun.com",
      gender: "Male",
      age: 38
    },
    {
      id: 13,
      first_name: "Domenico",
      last_name: "Shearman",
      email: "dshearmanc@seesaa.net",
      gender: "Male",
      age: 66
    },
    {
      id: 14,
      first_name: "Rodolphe",
      last_name: "Bittlestone",
      email: "rbittlestoned@51.la",
      gender: "Male",
      age: 33
    },
    {
      id: 15,
      first_name: "Merv",
      last_name: "Watterson",
      email: "mwattersone@storify.com",
      gender: "Male",
      age: 37
    },
    {
      id: 16,
      first_name: "Betty",
      last_name: "Simm",
      email: "bsimmf@engadget.com",
      gender: "Female",
      age: 26
    },
    {
      id: 17,
      first_name: "Rafaellle",
      last_name: "Brighouse",
      email: "rbrighouseg@vinaora.com",
      gender: "Male",
      age: 43
    },
    {
      id: 18,
      first_name: "Sibby",
      last_name: "Meanwell",
      email: "smeanwellh@independent.co.uk",
      gender: "Female",
      age: 66
    },
    {
      id: 19,
      first_name: "Ricky",
      last_name: "Sissland",
      email: "rsisslandi@google.it",
      gender: "Male",
      age: 76
    },
    {
      id: 20,
      first_name: "Sauveur",
      last_name: "Hessenthaler",
      email: "shessenthalerj@ocn.ne.jp",
      gender: "Male",
      age: 48
    },
    {
      id: 21,
      first_name: "Carmela",
      last_name: "Bucksey",
      email: "cbuckseyk@acquirethisname.com",
      gender: "Female",
      age: 22
    },
    {
      id: 22,
      first_name: "Nydia",
      last_name: "Folke",
      email: "nfolkel@disqus.com",
      gender: "Female",
      age: 68
    },
    {
      id: 23,
      first_name: "Asia",
      last_name: "Boake",
      email: "aboakem@1und1.de",
      gender: "Female",
      age: 39
    },
    {
      id: 24,
      first_name: "Sterne",
      last_name: "Jacobowitz",
      email: "sjacobowitzn@cbc.ca",
      gender: "Male",
      age: 47
    },
    {
      id: 25,
      first_name: "Alwin",
      last_name: "Krolak",
      email: "akrolako@springer.com",
      gender: "Male",
      age: 58
    },
    {
      id: 26,
      first_name: "Linn",
      last_name: "Copeman",
      email: "lcopemanp@google.nl",
      gender: "Male",
      age: 37
    },
    {
      id: 27,
      first_name: "Britni",
      last_name: "Gumley",
      email: "bgumleyq@wordpress.org",
      gender: "Female",
      age: 56
    },
    {
      id: 28,
      first_name: "Trumann",
      last_name: "Di Carli",
      email: "tdicarlir@xinhuanet.com",
      gender: "Male",
      age: 62
    },
    {
      id: 29,
      first_name: "Deeanne",
      last_name: "Gun",
      email: "dguns@umich.edu",
      gender: "Female",
      age: 64
    },
    {
      id: 30,
      first_name: "Fielding",
      last_name: "Begin",
      email: "fbegint@jalbum.net",
      gender: "Male",
      age: 77
    }
  ], // Your array of employees
  teamMembers: [],
  averageAge: 0
};

const reducer = (state, action) => {
  // ... (Your existing reducer code)
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state,
        allEmployees: state.allEmployees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, added: true }
            : employee
        ),
        teamMembers: [...state.teamMembers, action.payload]
      };

    case "REMOVE_MEMBER":
      return {
        ...state,
        allEmployees: state.allEmployees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, added: false }
            : employee
        ),
        teamMembers: state.teamMembers.filter(
          (member) => member.id !== action.payload.id
        )
      };

    case "CALCULATE_AVERAGE":
      const totalAge = state.teamMembers.reduce(
        (acc, member) => acc + member.age,
        0
      );
      const averageAge = totalAge / state.teamMembers.length || 0;
      return {
        ...state,
        averageAge
      };

    case "SORT_BY_AGE":
      return {
        ...state,
        teamMembers: [...state.teamMembers].sort((a, b) => a.age - b.age)
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="components">
      <EmployeeList  employees={state.allEmployees} dispatch={dispatch} />
      <TeamList  teamMembers={state.teamMembers} dispatch={dispatch} />
    </div>
  );
};

export default App;
