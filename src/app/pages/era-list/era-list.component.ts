// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-era-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './era-list.component.html',
//   styleUrl: './era-list.component.css'
// })
// export class EraListComponent {

// }


// app.component.ts

import { Component, OnInit } from '@angular/core';

interface Civilization {
  name: string;
  era: string;
}

interface Resources {
  gold: number;
  wood: number;
  stone: number;
}

@Component({
  selector: 'app-era-list',
  templateUrl: './era-list.component.html',
  styleUrls: ['./era-list.component.css']
})
export class EraListComponent implements OnInit {
  playerCivilization: Civilization = { name: 'Player Empire', era: 'Ancient' };
  playerResources: Resources = { gold: 100, wood: 50, stone: 30 };

  ngOnInit() {
    // Game initialization logic
  }

  buildBuilding(buildingType: string) {
    // Logic for building a structure
    if (this.canAffordBuilding(buildingType)) {
      this.playerResources.gold -= 10; // assuming cost
      this.playerResources.wood -= 5; // assuming cost
      console.log(`Built ${buildingType}!`);
    } else {
      console.log('Not enough resources to build.');
    }
  }

  canAffordBuilding(buildingType: string): boolean {
    // Check if the player has enough resources to build a structure
    return (
      this.playerResources.gold >= 10 &&
      this.playerResources.wood >= 5
      // You may add more resource checks based on the game design
    );
  }

  travelThroughTime(newEra: string) {
    // Logic for time travel
    console.log(`Traveling to ${newEra} era...`);
    this.playerCivilization.era = newEra;
  }
}
