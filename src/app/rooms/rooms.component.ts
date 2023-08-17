import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName: string = "Hilton Hotel";

  numberOfRooms = 10;
  hideRooms= false;

  rooms : Room = { 
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
   };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      amenities: "Aircon, wifi, TV, Bathroom, Kitchen",
      price: 500,
      photos: "link",
      checkinTime: new Date(),
      checkoutTime: new Date("8-28-2023")
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      amenities: "Aircon, wifi, TV, Bathroom, Kitchen",
      price: 1000,
      photos: "link",
      checkinTime: new Date(),
      checkoutTime: new Date("8-28-2023")
    },
    {
      roomNumber: 3,
      roomType: "Private Suite",
      amenities: "Aircon, wifi, TV, Bathroom, Kitchen",
      price: 1500,
      photos: "link",
      checkinTime: new Date(),
      checkoutTime: new Date("8-28-2023")
    }
  ]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
