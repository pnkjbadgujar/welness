# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-08-15 12:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='name',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='country',
            name='name',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='state',
            name='name',
            field=models.CharField(max_length=120),
        ),
    ]
