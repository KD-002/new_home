# Generated by Django 4.0.2 on 2022-02-25 21:12
import random

from django.db import migrations
from faker import Faker


def create_fake_users(apps, _):
    Host = apps.get_model('host', 'Host')
    Subtype = apps.get_model('host', 'Subtype')
    User = apps.get_model('users', 'CustomUser')
    faker = Faker()

    subtypes = Subtype.objects.bulk_create(
        [Subtype(name=name) for name in faker.words(nb=20)]
    )

    users = []
    hosts = []
    for _ in range(500):
        profile = faker.simple_profile()

        user = User(
            username=profile['username'],
            email=profile['username'],
            password=faker.password()
        )
        users.append(user)

        host = Host(
            user=user,
            title=faker.text(max_nb_chars=200),
            start_date=None,
            end_date=None,
            description=faker.text(max_nb_chars=1000),
            location=faker.text(max_nb_chars=200),
            contact_address=faker.text(max_nb_chars=500),
            contact_email=profile['username'],
            contact_phone=random.randrange(start=int(10e9), stop=int(10e14)),
        )
        for _ in range(0, random.randrange(0, 4)):
            subtype = subtypes[random.randrange(0, len(subtypes))]
            host.subtype.add(subtype)
        hosts.append(host)

    User.objects.bulk_create(users)
    Host.objects.bulk_create(hosts)


class Migration(migrations.Migration):
    dependencies = [
        ('host', '0001_initial'),
        ('users', '0002_super_user'),
    ]

    operations = [
        migrations.RunPython(create_fake_users),
    ]
