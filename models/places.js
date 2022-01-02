import places from "../data.js";

export function findPlaceByID(id){
	return places.find(function (place){
		return place.id === id;
	});
}

export function getPlaces() {
	return places;
}