import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

export const PICK_FORMATS = {
    parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
    display: {
        dateInput: 'input',
        monthYearLabel: {year: 'numeric', month: 'short'},
        dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
        monthYearA11yLabel: {year: 'numeric', month: 'long'}
    }
    
  };

  export class PickDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        if (displayFormat === 'input') {
            return formatDate(date,'yyyy-MM-dd',this.locale);
        } else {
            return date.toDateString();
        }
    }
  }