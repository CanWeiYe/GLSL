#include "Glsl_Project.h"
#include"openGL_widget.h"
#include <QtWidgets/QApplication>



Glsl_Project* Glsl_Project::instance = nullptr;		// single instance

int main(int argc, char *argv[])
{
	QApplication a(argc, argv);
	Glsl_Project* w = Glsl_Project::getInstance();
	w->setWindowTitle("FractalCreator");
	w->show();

	return a.exec();
}

