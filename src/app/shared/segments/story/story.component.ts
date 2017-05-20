import { Component, OnInit, Input } from '@angular/core';
import { IStory } from "app/shared/models/models";

/**
 * Stateless story component.
 * It gets all it's data (IStory object) from the parnet.
 */
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  /**
   * Allowing the parent to inject data to the component (Using the @Input decorator)
   */
  @Input() private story: IStory;

  constructor() { }

  ngOnInit() {
  }

}
