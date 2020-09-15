#include "Glsl_Project.h"
#include"openGL_widget.h"
#include<qmessagebox.h>
#include<qevent.h>

Glsl_Project::Glsl_Project(QWidget *parent)
	: QMainWindow(parent)
{
	ui.setupUi(this);
	this->glw = nullptr;
	QCursor cursor;					// 光标
	QPixmap pixmap("img/cursor.png");
	cursor = QCursor(pixmap, -1, -1);
	setCursor(cursor);
}

void Glsl_Project::on_createButton_clicked() {
	if (this->glw != nullptr) {// 窗口唯一性	
		glw->close();
		setglWindowNull();
	}
	/*
	获取主窗口内参数以传向GPU
	*/
	int q = (this->ui).QText->toPlainText().simplified().toInt();
	int w = (this->ui).WText->toPlainText().simplified().toInt();
	int l = (this->ui).SizeText->toPlainText().simplified().toInt();
	int X0 = (this->ui).CenterX_Text->toPlainText().simplified().toInt();
	int Y0 = (this->ui).CenterY_Text->toPlainText().simplified().toInt();
	bool isColorRandom = (this->ui).isColorRandom->isChecked();
	int style = (this->ui).styleBox->currentIndex();
	if (q <= 0 || w <= 0 || l <= 0) {						// 异常输入处理
		QMessageBox::about(NULL, "error", QString::fromLocal8Bit("<strong style=\"color: red;\">请正确输入参数!</strong>"));
		return;
	}
	glWindow* glw = new glWindow(q,w,l,X0,Y0,isColorRandom,style);				// 创建OPENGL窗口
	glw->setAttribute(Qt::WA_DeleteOnClose, true);
	glw->show();
	this->glw = glw;
	
}

Glsl_Project::~Glsl_Project() {
	if (this->glw != nullptr)
		delete this->glw;
	delete animation;
}

Glsl_Project* Glsl_Project::getInstance() {
	if (instance == nullptr)
		instance = new Glsl_Project();
	return instance;
}

void Glsl_Project::setglWindowNull() {
	this->glw = nullptr;
}

void Glsl_Project::keyPressEvent(QKeyEvent* e) {
	switch (e->key()) {
		case Qt::Key_Enter:
		case Qt::Key_Return:
			this->ui.createButton->click();
			break;
		default:
			break;
	}
}

void Glsl_Project::show() {
	animation = new QPropertyAnimation(this, "windowOpacity");		// 动画
	animation->setDuration(1000);
	animation->setStartValue(0);
	animation->setEndValue(1);
	animation->start();
	QMainWindow::show();
}
