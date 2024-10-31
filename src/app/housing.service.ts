import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation'; // Ensure you have this interface defined

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // The URL pointing to your JSON server
  url = 'http://localhost:3000/locations';

  // Fetch all housing locations from the JSON server
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url);  // Fetch data from the JSON server
      return (await response.json()) ?? [];    // Return the data or an empty array if no data is found
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];  // Return an empty array in case of an error
    }
  }

  // Fetch a single housing location by ID from the JSON server
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);  // Fetch data by ID from the JSON server
      return (await response.json()) ?? {};  // Return the data or an empty object if no data is found
    } catch (error) {
      console.error(`Error fetching housing location with ID ${id}:`, error);
      return undefined;  // Return undefined in case of an error
    }
  }

  // Submit an application (this method remains the same)
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application received: First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`
    );
  }
}
