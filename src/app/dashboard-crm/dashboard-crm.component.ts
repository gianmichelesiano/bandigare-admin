import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

    public dashCard = [
        { colorDark: '#006a81', colorLight: '#0787a1', number: 234, title: 'GARE COMPLETE', icon: 'thumb_up' },
        { colorDark: '#2b9861', colorLight: '#52bf8a', number: 11, title: 'GARE APERTE', icon: 'new_releases' },
        { colorDark: '#0d497e', colorLight: '#225b90', number: 78, title: 'GARE AVVALIMENTI', icon: 'group_work' },
        { colorDark: '#008683', colorLight: '#6fc1b3', number: 123, title: 'GARE SUBAPPLTI', icon: 'subdirectory_arrow_right' }
    ];

    tableData = [
        { country: 'Lombardia', sales: 400, percentage: '10%' },
        { country: 'Campania', sales: 200, percentage: '11.33%' },
        { country: 'Lazio', sales: 233, percentage: '18.056%' },
        { country: 'Emilia-Romagna', sales: 600, percentage: '6%' },
        { country: 'Sicilia', sales: 200, percentage: '4.50%' },
        { country: 'Piemonte', sales: 100, percentage: '2.50%' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
