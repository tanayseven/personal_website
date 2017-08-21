from jinja2 import Environment, FileSystemLoader

with open('css.txt') as f:
    css_file_path = f.read()
css_file_path = '/' + '/'.join(css_file_path.split('/')[1:])
template = Environment(loader=FileSystemLoader('personal_website/pages/')).get_template('index.html')

result = template.render(
    css_file_path=css_file_path,
    page_title='Home',
    nav_button='home',
)

if __name__ == '__main__':
    print(result)
