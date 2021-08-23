const cities = [
    {
        'name': 'Philadelphia',
        'neighbors': [
            'New York',
            'Washington D.C.',
            'Baltimore',
            'Pittsburgh'
        ]
    },
    {
        'name': 'New York',
        'neighbors': [
            'Philadelphia',
            'Boston',
            'Buffalo',
        ]
    },
    {
        'name': 'Washington D.C.',
        'neighbors': [
            'Philadelphia',
            'Richmond',
            'Baltimore'
        ]
    },
    {
        'name': 'Baltimore',
        'neighbors': [
            'Philadelphia',
            'Washington D.C.',
        ]
    },
    {
        'name': 'Pittsburgh',
        'neighbors': [
            'Philadelphia',
            'Canton',
            'Erie',
        ]
    },
    {
        'name': 'Boston',
        'neighbors': [
            'New York'
        ]
    },
    {
        'name': 'Buffalo',
        'neighbors': [
            'New York',
            'Erie'
        ]
    },
    {
        'name': 'Richmond',
        'neighbors': [
            'Washington D.C.',
            'Atlanta'
        ]
    },
    {
        'name': 'Canton',
        'neighbors': [
            'Chicago',
            'Pittsburgh'
        ]
    },
    {
        'name': 'Erie',
        'neighbors': [
            'Pittsburgh',
            'Buffalo'
        ]
    },
    {
        'name': 'Atlanta',
        'neighbors': [
            'Richmond'
        ]
    },
    {
        'name': 'Chicago',
        'neighbors': [
            'Canton'
        ]
    }
]

module.exports = {
    cities
}