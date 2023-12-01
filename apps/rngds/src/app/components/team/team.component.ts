import { AsyncPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { supabase } from '../../services/supabase';

type Position = 'DB' | 'QB' | 'WR';

interface Member {
  id: number;
  firstname: string;
  lastname: string;
  imageUrl?: string;
  isCoach: boolean;
  isCaptain: boolean;
  isPlayer: boolean;
  jerseyNumber?: number;
  position?: Position;
}

@Component({
  selector: 'rngds-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  standalone: true,
  imports: [AsyncPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamComponent implements OnInit {
  members$: Subject<Member[]> = new Subject();

  async ngOnInit() {
    await this.fetchMembers();

    // const [coach$, players$] = partition(this.members$, (members => ));
  }

  async fetchMembers() {
    const { data, error } = await supabase.from('Members').select('*');
    if (error) console.log('error', error);
    else this.members$.next(data);
  }
}
