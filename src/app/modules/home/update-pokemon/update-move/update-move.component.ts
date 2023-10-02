import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../home.service';
import {Observable} from 'rxjs';
import {PokemonDto} from '../../home.type';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-move',
  templateUrl: './update-move.component.html'
})
export class UpdateMoveComponent implements OnInit {

  formMove?: FormGroup;
  pokemon$?: Observable<PokemonDto | null>;

  constructor(
    private service: HomeService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.pokemon$ = this.service.moveElement$;
    this.formMove = this.fb.group({
      moves: this.fb.array([])
    });
  }


  addMove(): void {
    (this.formMove?.get('moves') as FormArray)
      .push(
        this.fb.group({
          name: this.fb.control('')
        })
      );
  }

}
