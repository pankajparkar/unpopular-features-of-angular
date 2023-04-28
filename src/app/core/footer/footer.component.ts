import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uf-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  `,
  styles: [`
    .container{
      max-width: 1170px;
      margin:auto;
    }
    .row{
      display: flex;
      flex-wrap: wrap;
    }
    ul{
      list-style: none;
    }
    .footer{
      background-color: #673ab7;
      padding: 70px 0;
    }
    .footer-col{
      width: 25%;
      padding: 0 15px;
    }
    .footer-col h4{
      font-size: 18px;
      color: #ffffff;
      text-transform: capitalize;
      margin-bottom: 35px;
      font-weight: 500;
      position: relative;
    }
    .footer-col h4::before{
      content: '';
      position: absolute;
      left:0;
      bottom: -10px;
      background-color: #e91e63;
      height: 2px;
      box-sizing: border-box;
      width: 50px;
    }
    .footer-col ul li:not(:last-child){
      margin-bottom: 10px;
    }
    .footer-col ul li a{
      font-size: 16px;
      text-transform: capitalize;
      color: #ffffff;
      text-decoration: none;
      font-weight: 300;
      color: #bbbbbb;
      display: block;
      transition: all 0.3s ease;
    }
    .footer-col ul li a:hover{
      color: #ffffff;
      padding-left: 8px;
    }
    .footer-col .social-links a{
      display: inline-block;
      height: 40px;
      width: 40px;
      background-color: rgba(255,255,255,0.2);
      margin:0 10px 10px 0;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;
      color: #ffffff;
      transition: all 0.5s ease;
    }
    .footer-col .social-links a:hover{
      color: #24262b;
      background-color: #ffffff;
    }

    /*responsive*/
    @media(max-width: 767px){
      .footer-col{
        width: 50%;
        margin-bottom: 30px;
      }
    }
    @media(max-width: 574px){
      .footer-col{
        width: 100%;
      }
    }
  `]
})
export class FooterComponent {

}
