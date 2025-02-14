#python #setup

# Setting up Python

#virtualenv #pip #pytorch #ollama #numpy #pandas #cv #nltk #jupyterlab
```bash
# install python (mostly installed on linux by default)
## Install below as needed.
# sudo apt install python python3-venv python3-pip

# go to home directory
cd ~/
python -m venv .ai
source ~/.ai/bin/activate
python -m pip install --upgrade pip
python -m pip install --upgrade pandas numpy nltk opencv-python scikit-learn jupyterlab matplotlib ollama pyautogui scikit-learn
# CPU pytorch
python -m pip install --upgrade torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
# GPU pytorch
python -m pip install --upgrade torch torchvision torchaudio

```

