import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Pagination])
@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
	accounts: any[] = [];
	bannerConfig: SwiperOptions = {};
	constructor() { }

	ngOnInit() {
		this.accounts = [
			{ id: 1, acc_no: '3457880287', balance: '200000' },
			{ id: 2, acc_no: '4588534343', balance: '400000' },
			{ id: 3, acc_no: '0098644233', balance: '900000' },
		]
	}

	ngAfterContentChecked(): void {
		this.bannerConfig = {
			slidesPerView: 1,
			pagination: { clickable: true }
		}
		console.log('ok')
	}

}
