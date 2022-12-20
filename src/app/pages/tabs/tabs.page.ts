import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.page.html',
	styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
	@ViewChild('tabs', { static: false }) tabs: any;
	selectedTab: any;
	constructor() { }

	ngOnInit() {
	}

	setCurrentTab() {
		this.selectedTab = this.tabs.getSelected();
	}

}
