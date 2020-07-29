import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = null;
  public constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate
      .use('de')
      .pipe(
        first(),
        tap(
          () =>
            (this.fields = [
              {
                key: 'firstname',
                type: 'input',
                templateOptions: {
                  label: this.translate.instant('FIRSTNAME'),
                },
              },
              {
                key: 'lastname',
                type: 'input',
                templateOptions: {
                  label: this.translate.instant('LASTNAME'),
                },
              },
            ])
        )
      )
      .subscribe();
  }
}
