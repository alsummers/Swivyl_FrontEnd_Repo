import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { CompanyService } from '../../../../Services/company.service';
import { AuthService } from '../../../../Services/auth.service';
import { ShareholderService } from '../../../../Services/shareholder.service';


@Component({
  selector: 'app-shareholder-card',
  templateUrl: './company-shareholder-card.component.html',
  styles: ['button{margin: 5px}']
  
})
export class CompanyShareholderCardComponent implements OnInit {
  companyId: string = localStorage.getItem('company')
  shareholders: object
  updateId: any
  confirm: any
  modalRef: any
  constructor(private modalService: NgbModal, private _companyService: CompanyService, private _auth: AuthService, private _sholderService: ShareholderService) { }

  ngOnInit() {
    this._companyService.fetchcompany().subscribe(e => {
      console.log(e[0])
      this.companyId = e[0].uid
      localStorage.setItem('company', e[0].uid)
      return this.grabAllShareholders(this.companyId)
    })
  }

  grabAllShareholders(companyId) {
    this._sholderService.fetchAllShareholders(companyId).subscribe(e => {
      this.shareholders = e
    })
  }
  createShareholder(e) {
    const address = `${e.target.elements[3].value} ${e.target.elements[4].value} ${e.target.elements[5].value} ${e.target.elements[6].value}`
    const sholderInfo = {
      shareholders: {
        firstname: e.target.elements[0].value,
        lastname: e.target.elements[1].value,
        address: address,
        ownership: e.target.elements[2].value
      },
      company: {
        uid: this.companyId
      }
    }
    this._sholderService.createShareholder(sholderInfo).subscribe(e => {
      this.grabAllShareholders(this.companyId)
    })
  }
  removeShareholder(e) {
    if (this.confirm === 'true') {
      this._sholderService.deleteShareholder(this.updateId).subscribe(e => {
        this.grabAllShareholders(this.companyId)
      this.closeModal()
      })
    }
  }
  open(content) {
    this.modalRef = this.modalService.open(content)
    this.updateId = event.srcElement.id
  }
  closeModal() { this.modalRef.close(); }

  updateShareholder(e) {
    const address = `${e.target.elements[3].value} ${e.target.elements[4].value} ${e.target.elements[5].value} ${e.target.elements[6].value}`
    const sholderInfo = {
      shareholders: {
        firstname: e.target.elements[0].value,
        lastname: e.target.elements[1].value,
        address: address,
        ownership: e.target.elements[2].value,
        uid: this.updateId
      },
      company: {
        uid: this.companyId
      }
    }
    this._sholderService.updateShareholder(sholderInfo).subscribe(e => {
      this.grabAllShareholders(this.companyId)
      this.closeModal()
    })
  }
}
