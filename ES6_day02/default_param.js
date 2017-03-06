function i_saw_animals(animal1 = 'tiger',animal2 = 'bear'){
	return `oh my god ,I see a ${ animal1 } and a ${ animal2 }!`
}

i_saw_animals()
// oh my god ,I see a tiger and a bear!

i_saw_animals('cat','dog')
// oh my god ,I see a cat and a dog!

function animal_count(animal2 = 'tigers',animal3 = (animal2 === 'bears') ? 'sealions' : 'cat'){
	return `lions and ${animal2} and ${animal3}, oh my god`
}

animal_count()
// lions and tigers and cat, oh my god

animal_count('bears')
// lions and bears and sealions, oh my god

animal_count('bears','mouse')
// lions and bears and mouse, oh my god