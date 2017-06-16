import { 
	
} from '../actions/missions'

const initialState = {
	missions: [
		{
			id: 0,
			name: "Flyby"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature"
			]
		},
		{
			id: 0,
			name: "Orbit"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Surface mapping",
				"Magnetic field",
			]
		},
		{
			id: 0,
			name: "Manned Orbit"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Surface mapping",
				"Magnetic field",
			]
		},
		{
			id: 0,
			name: "Probe"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity"
			]
		},
		{
			id: 0,
			name: "Manned Lander"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity",
				"Geology Analysis",
				"Surface properties",
			]
		},
		{
			id: 0,
			name: "Unmanned Rover"
			submissions: [
				"Low-quality Pictures",
				"Medium-quality Pictures",
				"High-quality Pictures",
				"Radiation",
				"Temperature",
				"Athmospheric Pressure",
				"Seismic activity",
				"Geology Analysis",
				"Surface properties",
			]
		},
	],
	target: [
		{
			id: 0,
			name: "Low Earth Orbit",
			distance: 400, 
			g: 0,
		},
		{
			id: 1,
			name: "Medium Earth Orbit",
			distance: 20000
			g: 0,
		},
		{
			id: 2,
			name: "Geosynchronous Earth Orbit",
			distance: 36000
			g: 0,
		},
		{
			id: 3,
			name: "Moon",
			distance: 380000
			g: 0.16,
		},
		{
			id: 4,
			name: "Mars",
			distance: 56000000
			g: 0.379,
		},
	],
}

export default function inventory(state = initialState, action) {

	switch (action.type) {
		
		case ADD_RESOURCE:
		return {        
			...state, 
			[action.payload.resource]: state[action.payload.resource]+= action.payload.count,

		}

		case REMOVE_RESOURCE:
		return {        
			...state, 
			[action.payload.resource]: state[action.payload.resource]-= action.payload.count,

		}
		
		default:
		return state
	}
}
