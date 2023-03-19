import { Component, Input } from "@angular/core";

@Component({
    selector: "app-post-filter-input",
    templateUrl: "post-filter-input.component.html",
    styleUrls: ["./post-filter-input.component.css"]
})
export class PostFilterComponent {
    @Input() searchQuery = "";
    
}