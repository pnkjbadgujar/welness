#!/bin/sh

# Recreate database
echo ""
echo "------------------------------------------------------------"
echo "Setting up database"
echo ""

# Initial django migration
echo ""
echo "------------------------------------------------------------"
echo "Initial Django migration"
echo ""

python manage.py migrate

# Cleanup of previous migrations
echo ""
echo "------------------------------------------------------------"
echo "Previous migration cleanup"
echo ""

rm -R account/migrations
rm account/admin.pyc
rm account/models.pyc

rm -R welness/migrations
rm welness_app/admin.pyc
rm welness_app/models.pyc


# Create superuser
echo ""
echo "------------------------------------------------------------"
echo "Creating superuser"
echo ""

# Create initial users
echo ""
echo "------------------------------------------------------------"
echo "Creating initial users"
echo ""

# Set up application migrations
echo ""
echo "------------------------------------------------------------"
echo "Setting up application migrations"
echo ""

python manage.py makemigrations account
python manage.py makemigrations welness_app
python manage.py migrate


echo ""
echo "------------------------------------------------------------"
echo "All Done!"
echo "------------------------------------------------------------"
echo ""
