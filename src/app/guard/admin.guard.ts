import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor (private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem("name") === "admin") {
            return true;
        }

        this.router.navigate(['/welcome']);
        
        return false;
    }
}