const person = {
    name: 'Chandra',
    age: 23,
    address: {
        city: 'Hyderabad',
        country: 'India'
    },
    profiles: ['twitter', 'instagram'],
    printProfiles: () => {
        person.profiles.map(
            (profile) => console.log(profile)
        )
    }
}


function LearningJavaScript() {
    return (
        <>
            <div className="">Learning JavaScript</div>
            <div>
                person details: {person.name}, {person.address.city}, {person.profiles[0]}
            </div>
            <div>{person.printProfiles()}</div>
        </>
    )
}

export default LearningJavaScript;