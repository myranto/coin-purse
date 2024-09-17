import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FloatLabelModule} from "primeng/floatlabel";
import {CardModule} from "primeng/card";
import {TabViewChangeEvent, TabViewModule} from "primeng/tabview";
import {PersonService} from "../../../utils/services/person-service";
import {Person} from "../../../utils/interfaces/models/person";
import {MessageService} from "primeng/api";
import {PasswordModule} from "primeng/password";
import {Router} from "@angular/router";
import {logged_user} from "../../../utils/Utils";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    DividerModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    CardModule,
    TabViewModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form!:FormGroup
  state:string= 'idle'
  mode:any = 0
  constructor(private formBuilder: FormBuilder, private personservice: PersonService, private message: MessageService,private router: Router) {
   this.initBuilder()
  }
  initBuilder(){
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      mail: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      mdp: new FormControl(''),
      mdp1: new FormControl(''),
    })
  }
  onSubmit(){
      this.state = 'loading'
      if (this.mode == 0){
        if (this.form.value.mail && this.form.value.password) {
          let person: Person = this.form.value;
          this.personservice.login(person)
            .subscribe({
              error: (e) => {
                this.state = 'idle';
                this.addMessage('Erreur!', e.error.message, 'error')
              },
              next: async (logged) => {
                localStorage.setItem(logged_user, JSON.stringify(logged));
                this.state = 'idle';
                this.addMessage('Succes!', 'Connexion réussi', 'success')
                await this.router.navigate(['/home/type-cost'])
              }
            });
        }else{
          this.addMessage('Erreur!', 'Veuillez completer le formulaire','error')
          this.state = 'idle'
        }
      }else {
          let person:Person = {
            id:null,
            password:this.form.value?.mdp,
            mail:this.form.value?.email,
            name:this.form.value?.name,
          }
        if (this.form.value.email && this.form.value.name && this.form.value.mdp && this.form.value.mdp1) {
          if (this.form.value.mdp == this.form.value.mdp1){
            this.personservice.create(person)
              .subscribe({
                error: (e) => {
                  this.state = 'idle';
                  this.addMessage('Erreur!', e.error.message,'error')
                },
                next: (logged) => {
                  this.state = 'idle';
                  this.initBuilder()
                  this.addMessage('Succes!', 'Inscription réussi','success')
                }
              });
          }else {
            this.addMessage('Erreur!', 'Mettre deux mot de passe identiques','error')
            this.state = 'idle'
          }
        }else{
          this.addMessage('Erreur!', 'Veuillez completer le formulaire','error')
          this.state = 'idle'
        }
      }
  }
  addMessage(title:string,message:string,severity:string) {
    this.message.add({severity:severity, summary:title, detail:message});
  }
  changeMode(event:TabViewChangeEvent){
    this.mode = event.index
  }
}
