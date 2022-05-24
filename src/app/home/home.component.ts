import { Component, OnInit } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../menu/shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../menu/shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader! : Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice : LeaderService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();
  }

}
