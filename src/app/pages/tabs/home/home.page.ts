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
	features: any[] = [];
	transactions: any[] = [];
	bannerConfig: SwiperOptions = {};
	featureConfig: SwiperOptions = {};
	constructor() { }

	ngOnInit() {
		this.accounts = [
			{ id: 1, acc_no: '3457880287', balance: '200000' },
			{ id: 2, acc_no: '4588534343', balance: '400000' },
			{ id: 3, acc_no: '0098644233', balance: '900000' },
		]

		this.features = [
			{ id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
			{ id: 2, color: 'danger', icon: 'send', name: 'Request' },
			{ id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
			{ id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
			{ id: 5, color: 'warning', icon: 'card', name: 'Cards' },
		];

		this.transactions = [
			{ id: 1, to: 'Piyush Ag.', date: '2022-05-22', amount: 5000 },
			{ id: 2, to: 'Avinash', date: '2022-03-02', amount: 7000 },
			{ id: 3, to: 'Catherine', date: '2022-07-28', amount: -3250 },
			{ id: 4, to: 'Akil Ag.', date: '2022-05-22', amount: 1000 },
			{ id: 5, to: 'Prem Ag.', date: '2022-05-22', amount: -800 },
		]
	}

	ngAfterContentChecked(): void {
		this.bannerConfig = {
			slidesPerView: 1,
			pagination: { clickable: true }
		}

		this.featureConfig = {
			slidesPerView: 3.5,
		}
	}

}
